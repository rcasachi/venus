import { Appendix, Input, TextInputContainer } from './styles'
import { TextFieldProps } from './types'

export function TextField({
  prefix,
  sufix,
  cursor,
  state,
  ghost,
  size,
  ...props
}: TextFieldProps) {
  return (
    <TextInputContainer cursor={cursor} state={state} ghost={ghost}>
      {!!prefix && <Appendix size={size}>{prefix}</Appendix>}
      <Input size={size} {...props} />
      {!!sufix && <Appendix size={size}>{sufix}</Appendix>}
    </TextInputContainer>
  )
}

TextField.displayName = 'TextField'
