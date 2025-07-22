export interface Agent {
  name: string;
  role: string;
  tier: number;
  activate: () => void;
  status?: 'active' | 'inactive';
}
