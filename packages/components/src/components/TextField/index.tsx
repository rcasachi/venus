import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextFieldProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextField({ prefix, ...props }: TextFieldProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextField.displayName = 'TextField'
