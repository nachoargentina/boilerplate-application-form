export interface QuestionsOptionsType {
  id: number;
  optionId: number;
  label: string;
}

export interface QuestionsType {
  defaultValue: string;
  description: string;
  fieldName: string;
  id: number;
  isCustomField: boolean;
  isSharedField: boolean;
  label: string;
  options: null | Array<QuestionsOptionsType>;
  ordinal: number;
  placeholder: string;
  required: boolean;
  type: string;
  value: string;
}

interface StepType {
  title: string;
  description: string;
  questions: Array<QuestionsType>;
}

export interface FormType {
  id: number;
  creationDate: string;
  areaOfCoverage: string;
  name: string;
  clientId: number;
  status: string;
  steps: Array<StepType>;
}
