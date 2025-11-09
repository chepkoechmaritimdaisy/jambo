export type Package = {
  id: string;
  name: string;
  description: string;
  price: number;
  sessions: number;
  photos: string[];
  status: 'active' | 'inactive';
};

export type Specialist = {
  id: string;
  name: string;
};

export type Station = {
  id: string;
  name: string;
};

export type Availability = {
  id: string;
  specialist_id: string;
  station_id: string;
  date: string;
  start_time: string;
  end_time: string;
};

export type Booking = {
  id: string;
  user_id: string;
  package_id: string;
  date: string;
  time: string;
  specialist_id: string;
};

export type Ambassador = {
  id: string;
  user_id: string;
  unique_code: string;
  commission_rate: number;
  client_discount_rate: number;
};
