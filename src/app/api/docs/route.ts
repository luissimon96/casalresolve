import { NextResponse } from 'next/server'
import { createSwaggerSpec } from 'next-swagger-doc'

export async function GET() {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'CasalResolve API',
        version: '1.0.0',
        description: 'API para a plataforma CasalResolve de resolução de conflitos para casais',
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Servidor de desenvolvimento',
        },
        {
          url: 'https://casalresolve.com/api',
          description: 'Servidor de produção',
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
  })

  return NextResponse.json(spec)
}
