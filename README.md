# s2026q2c-cdk-rsandoval

# Taller AWS CDK (TypeScript)

Este repositorio implementa infraestructura en AWS usando AWS CDK (Cloud Development Kit) con TypeScript.

Incluye:
- AWS Lambda
- Amazon S3 Bucket
- Despliegue automático de un archivo `hola.txt` con contenido "Hola Mundo"

---

# Objetivo

Aprender a usar Infrastructure as Code (IaC) con AWS CDK para:

- Crear infraestructura en AWS con TypeScript
- Automatizar despliegues
- Entender AWS CDK + CloudFormation
- Desplegar Lambda y S3 desde código

---

# Arquitectura

Se crean los siguientes recursos:

- Lambda: función `HelloLambda`
- S3 Bucket: `SemilleroBucket`
- Deployment automático de archivos desde `assets/` hacia S3

---

# Estructura del proyecto

```text
bin/        -> entrypoint CDK
lib/        -> stack principal
lambda/     -> código Lambda (hello.ts)
assets/     -> archivos estáticos (hola.txt)
docs/       -> documentación (opcional)
