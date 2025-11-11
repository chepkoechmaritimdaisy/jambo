'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function createPackage(formData: FormData) {
  const { name, description, price, sessions, status, photos } = Object.fromEntries(formData.entries());

  // TODO: Implement proper file upload logic. This is a placeholder.
  const photoUrl = photos ? photos.toString() : null;

  await sql`
    INSERT INTO packages (name, description, price, sessions, status, photos)
    VALUES (${name as string}, ${description as string}, ${price as string}, ${sessions as string}, ${status as string}, ${photoUrl})
  `;

  revalidatePath('/admin/packages');
}

export async function updatePackage(id: string, formData: FormData) {
  const { name, description, price, sessions, status, photos } = Object.fromEntries(formData.entries());

  // TODO: Implement proper file upload logic. This is a placeholder.
  const photoUrl = photos ? photos.toString() : null;

  await sql`
    UPDATE packages
    SET name = ${name as string},
        description = ${description as string},
        price = ${price as string},
        sessions = ${sessions as string},
        status = ${status as string},
        photos = ${photoUrl}
    WHERE id = ${id}
  `;

  revalidatePath('/admin/packages');
}

export async function deletePackage(id: string) {
  await sql`
    DELETE FROM packages
    WHERE id = ${id}
  `;

  revalidatePath('/admin/packages');
}
