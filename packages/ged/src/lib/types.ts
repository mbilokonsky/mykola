export interface Trait {
  name: string;
  value: string | number | boolean;
  notes?: string;
}

export interface Persona {
  name: string;
  origin?: string;
  physical_description?: string;
  traits: Trait[];
}

export interface Setting {
  name: string;
  description: string;
  assistant: Persona;
  characters: Persona[];
}

export interface System<I, O> {
  name: string;
  payload: string;
  assistant: Persona;
  setting: Setting;
  inputSchema: string;
  outputSchema: string;
}

export type SystemString = string;
