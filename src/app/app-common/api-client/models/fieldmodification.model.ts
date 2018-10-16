
export enum Operation {
  DELETE = 'DELETE',
  REPLACE = 'REPLACE',
  APPEND = 'APPEND',
  REMOVE = 'REMOVE'
}

export interface FieldModification {
  fieldName: string;
  operation: Operation;
  value: any;
}
