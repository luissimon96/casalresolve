import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const tiers = [
  {
    name: 'Gratuito',
    id: 'tier-free',
    href: '/auth/signup',
    price: { monthly: 'R$ 0' },
    description: 'Perfeito para casais que estão começando a resolver seus conflitos.',
    features: [
      'Acesso a 3 discussões por mês',
      'Documentação básica de acordos',
      'Sugestões básicas da IA',
      'Histórico limitado a 30 dias',
    ],
    mostPopular: false,
  },
  {
    name: 'Essencial',
    id: 'tier-essential',
    href: '/auth/signup?plan=essential',
    price: { monthly: 'R$ 29,90' },
    description: 'Ideal para casais que desejam melhorar sua comunicação.',
    features: [
      'Discussões ilimitadas',
      'Documentação completa de acordos',
      'Sugestões avançadas da IA',
      'Histórico de 1 ano',
      'Exportação de acordos em PDF',
      'Suporte por email',
    ],
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '/auth/signup?plan=premium',
    price: { monthly: 'R$ 59,90' },
    description: 'Para casais que buscam o máximo de recursos para resolver conflitos.',
    features: [
      'Tudo do plano Essencial',
      'Histórico ilimitado',
      'Análise avançada de padrões de comunicação',
      'Modelos personalizados de acordos',
      'Suporte prioritário 24/7',
      'Acesso antecipado a novos recursos',
    ],
    mostPopular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-purple-600">Preços</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Planos para todos os tipos de relacionamento
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Escolha o plano que melhor se adapta às necessidades do seu relacionamento e comece a resolver conflitos de forma mais eficiente.
        </p>
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
                  tier.mostPopular ? 'bg-purple-50 ring-purple-600' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-lg font-semibold leading-8 ${tier.mostPopular ? 'text-purple-600' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-purple-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-purple-600">
                      Mais popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/mês</span>
                </p>
                <Button
                  asChild
                  className={`mt-6 ${
                    tier.mostPopular ? 'bg-purple-600 hover:bg-purple-500' : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  <Link href={tier.href}>
                    {tier.mostPopular ? 'Começar agora' : 'Assinar'}
                  </Link>
                </Button>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
