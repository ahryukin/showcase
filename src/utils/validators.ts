import { FieldValidator } from "final-form"

type Validator<T> = FieldValidator<T>

export function required<T = string>(
  message: string = "Field is required"
): Validator<T> {
  return (value: any) => (Boolean(value) ? undefined : message)
}

export function atLeastOneOf<T = string>(
  fieldName: string,
  message: string = `Either this field or ${fieldName} must present`
): Validator<T> {
  return (value: T, allValues: Record<string, any>) =>
    Boolean(value) || Boolean(allValues[fieldName]) ? undefined : message
}
