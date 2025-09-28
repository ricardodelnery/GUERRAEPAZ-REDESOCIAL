-- Fix para campo category faltante
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "category" TEXT DEFAULT 'GENERAL';
