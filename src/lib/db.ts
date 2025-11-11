import { sql } from '@vercel/postgres';
import { Package } from './types';

export async function createPackagesTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS packages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price INT NOT NULL,
      sessions INT NOT NULL,
      photos TEXT,
      status VARCHAR(50) NOT NULL
    );
  `;
}

export async function createAmbassadorsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS ambassadors (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL, -- This should reference your users table
      unique_code VARCHAR(255) NOT NULL UNIQUE,
      commission_rate REAL NOT NULL,
      client_discount_rate REAL NOT NULL
    );
  `;
}

export async function getPackages(): Promise<Package[]> {
  const { rows } = await sql<Package>`SELECT * FROM packages;`;
  return rows;
}

export async function getPackageById(id: string): Promise<Package | null> {
  const { rows } = await sql<Package>`SELECT * FROM packages WHERE id = ${id};`;
  return rows[0] || null;
}

export async function createSpecialistsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS specialists (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL
    );
  `;
}

export async function createStationsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS stations (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL
    );
  `;
}

export async function createAvailabilityTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS availability (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      specialist_id UUID REFERENCES specialists(id),
      station_id UUID REFERENCES stations(id),
      date DATE NOT NULL,
      start_time TIME NOT NULL,
      end_time TIME NOT NULL
    );
  `;
}

export async function createBookingsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL, -- This should reference your users table
      package_id UUID REFERENCES packages(id),
      date DATE NOT NULL,
      time TIME NOT NULL,
      specialist_id UUID REFERENCES specialists(id)
    );
  `;
}
