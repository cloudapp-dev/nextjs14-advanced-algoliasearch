# Generating Prisma CLient

npx prisma generate --schema=prisma/schema.prisma

# Generating Prisma CLient for StorageAccounts

npx prisma generate --schema=prisma/schema_storageaccounts.prisma

# Push the first schema to the first database

npx prisma db push --schema=prisma/schema.prisma

# Push the second schema to the second database

npx prisma db push --schema=prisma/schema_storageaccounts.prisma
