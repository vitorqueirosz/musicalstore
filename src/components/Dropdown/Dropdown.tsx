import { useClickOutside, useToggle } from 'hooks';
import * as S from './Dropdown.styles';

export type DropdownProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  hasOverlay?: boolean;
};

export const Dropdown = ({
  children,
  title,
  hasOverlay = false,
}: DropdownProps) => {
  const [show, setShow] = useToggle(false);
  const elementRef = useClickOutside(() => setShow(false));

  return (
    <S.Wrapper show={show}>
      <S.Title onClick={() => setShow()}>{title}</S.Title>
      <S.Content aria-hidden={!show} ref={elementRef}>
        {children}
      </S.Content>
      {hasOverlay && (
        <S.Overlay
          onClick={() => setShow(false)}
          aria-hidden={!hasOverlay || !show}
        />
      )}
    </S.Wrapper>
  );
};
