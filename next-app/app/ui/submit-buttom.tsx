'use client';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type Props = ComponentProps<'button'> & {
  pendingText?: string;
};
export default function SubmitButton({
  children,
  pendingText = 'Enviando...',
  ...props
}: Props) {
  const { pending, action } = useFormStatus();
  const isPending = pending && action === props.formAction;
  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : 'Enviar'}
    </button>
  );
}
