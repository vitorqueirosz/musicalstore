import { Heading, Checkbox } from 'components';
import { Base } from 'templates';
import * as S from './Search.styles';

export const Search = () => {
  return (
    <Base>
      <S.Content>
        <Heading>Categorias</Heading>

        <S.Aside>
          <Checkbox label="Bateria" />
        </S.Aside>
      </S.Content>
    </Base>
  );
};
