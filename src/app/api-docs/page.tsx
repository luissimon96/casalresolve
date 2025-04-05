'use client'

import { useEffect, useState } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

export default function ApiDocs() {
  const [spec, setSpec] = useState<Record<string, any>>({})

  useEffect(() => {
    fetch('/api/docs')
      .then((response) => response.json())
      .then((data) => setSpec(data))
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">API Documentation</h1>
      <SwaggerUI spec={spec} />
    </div>
  )
}
