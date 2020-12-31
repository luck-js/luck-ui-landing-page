import React from 'react';
import styled from 'styled-components';
import { Box } from '../../components';
import { Theme } from '../../utils';
import media from '../../utils/media';
import Step from './Step';

const Container = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
  color: ${Theme.colors.black};
  padding: 100px ${Theme.space.large}px 0 ${Theme.space.regular}px
  
  ${media.greaterThan('mobile')`
    padding: 200px ${Theme.space.xlarge}px 0 ${Theme.space.xlarge}px;
  `}
`;

const HowToSection = () => {
  return (
    <Container>
      <Step
        header={'Opisz wydarzenie'}
        descriptions={[
          'Wpisz nazwę i opis wydarzenia, które zobaczą Twoi znajomi po otrzymaniu zaproszenia do losowania.',
          'Na przykład takim tytułem może być “Mikołajki klasy 6b”, a opis “Maksymalna kwota prezentu 50zł. Nie kupujemy słodyczy!',
        ]}
        src={'/static/how-to-describe-event.png'}
      />
      <Step
        header={'Dodaj uczestników'}
        descriptions={[
          'Wpisz nazwy uczestników (np imię i nazwisko). Powinna to być unikalna nazwa oraz na tyle czytelna by było wiadomo o kogo chodzi.',
          'Pamiętaj by wpisać siebie jeśli bierzesz udział.',
        ]}
        src={'/static/how-to-add-participants.png'}
      />
      <Step
        header={'Prześlij linki'}
        descriptions={[
          'Wyślij unilakny link uczestnika do swojego znajomego za pomocą komunikatora, którego używacie np messanger, email czy sms.',
          'Uważaj, by nie wysłać linku do niewłaściwej osoby.',
        ]}
        src={'/static/how-to-send-links.png'}
      />
      <Step
        header={'Losuj!'}
        descriptions={[
          'Po rozesłaniu linków zacznijcie losować swoją parę. Po wejściu na unikalny link zostaniesz zaproszony do losowania.',
          'Po kliknięciu w losuj wyświetli się osoba, która została przypisana do Ciebie.',
        ]}
        src={'/static/how-to-randomize.png'}
        last
      />
    </Container>
  );
};
export default HowToSection;
