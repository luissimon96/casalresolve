// Mock de banco de dados para desenvolvimento
import { v4 as uuidv4 } from 'uuid';

// Tipos de dados
interface Profile {
  id: string;
  user_id: string;
  name: string;
  email: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

interface Discussion {
  id: string;
  title: string;
  description: string;
  user_id: string;
  partner_id?: string;
  status: 'pending' | 'in_progress' | 'resolved';
  created_at: string;
  updated_at: string;
}

interface Partner {
  id: string;
  user_id: string;
  partner_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  updated_at: string;
}

// Armazenamento de dados
const db: {
  profiles: Record<string, Profile>;
  discussions: Record<string, Discussion>;
  partners: Record<string, Partner>;
} = {
  profiles: {},
  discussions: {},
  partners: {}
};

// Inicializar dados do localStorage
const initDb = () => {
  if (typeof window !== 'undefined') {
    const savedDb = localStorage.getItem('mockDb');
    if (savedDb) {
      try {
        const parsedDb = JSON.parse(savedDb);
        Object.assign(db, parsedDb);
      } catch (e) {
        console.error('Erro ao carregar banco de dados:', e);
        localStorage.removeItem('mockDb');
      }
    }
  }
};

// Salvar dados no localStorage
const saveDb = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mockDb', JSON.stringify(db));
  }
};

// Inicializar banco de dados
initDb();

// Funções auxiliares
const getCurrentTimestamp = () => new Date().toISOString();

// Criar cliente de banco de dados simulado
export const createMockDbClient = () => {
  return {
    from: (table: string) => {
      // Verificar se a tabela existe
      if (!db[table as keyof typeof db]) {
        console.warn(`Tabela ${table} não existe no banco de dados simulado`);
        db[table as keyof typeof db] = {};
      }

      return {
        // Selecionar dados
        select: (columns?: string) => {
          return {
            eq: (column: string, value: any) => {
              const items = Object.values(db[table as keyof typeof db]);
              const filtered = items.filter((item: any) => item[column] === value);
              return {
                data: filtered,
                error: null
              };
            },
            single: () => {
              const items = Object.values(db[table as keyof typeof db]);
              return {
                data: items.length > 0 ? items[0] : null,
                error: items.length === 0 ? { code: 'PGRST116', message: 'Nenhum registro encontrado' } : null
              };
            },
            order: (column: string, { ascending }: { ascending: boolean }) => {
              const items = Object.values(db[table as keyof typeof db]);
              const sorted = [...items].sort((a: any, b: any) => {
                if (ascending) {
                  return a[column] > b[column] ? 1 : -1;
                } else {
                  return a[column] < b[column] ? 1 : -1;
                }
              });
              return {
                data: sorted,
                error: null
              };
            }
          };
        },

        // Inserir dados
        insert: (items: any[]) => {
          const newItems = items.map((item) => {
            const id = item.id || uuidv4();
            const timestamp = getCurrentTimestamp();
            const newItem = {
              ...item,
              id,
              created_at: timestamp,
              updated_at: timestamp
            };
            db[table as keyof typeof db][id] = newItem;
            return newItem;
          });

          saveDb();

          return {
            select: () => ({
              data: newItems,
              error: null
            })
          };
        },

        // Atualizar dados
        update: (updates: any) => {
          return {
            eq: (column: string, value: any) => {
              const items = Object.values(db[table as keyof typeof db]);
              const itemsToUpdate = items.filter((item: any) => item[column] === value);
              
              itemsToUpdate.forEach((item: any) => {
                const updatedItem = {
                  ...item,
                  ...updates,
                  updated_at: getCurrentTimestamp()
                };
                db[table as keyof typeof db][item.id] = updatedItem;
              });

              saveDb();

              return {
                data: itemsToUpdate,
                error: null
              };
            }
          };
        },

        // Excluir dados
        delete: () => {
          return {
            eq: (column: string, value: any) => {
              const items = Object.values(db[table as keyof typeof db]);
              const itemsToDelete = items.filter((item: any) => item[column] === value);
              
              itemsToDelete.forEach((item: any) => {
                delete db[table as keyof typeof db][item.id];
              });

              saveDb();

              return {
                data: itemsToDelete,
                error: null
              };
            }
          };
        }
      };
    }
  };
};
