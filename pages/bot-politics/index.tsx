import React from 'react';
import styled from 'styled-components';
import BlogLayout from '../../src/blog/BlogLayout';
import { Theme } from '../../src/utils';
import { NextSeo } from 'next-seo/lib';
import {Box} from '../../src/components';
import media from '../../src/utils/media';
import {Header, Text, List, BlogTextLink} from "../../src/blog/Typography"

const Container = styled(Box)`
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.black};
  max-width: 1012px;
  margin: 0 auto;
  padding: ${Theme.space.small}px ${Theme.space.xregular}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.xregular}px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1138px;
    padding: ${Theme.space.xregular}px ${Theme.space.xregular}px;
  `}
`;



const Index = () => {
  return (
    <>
      <NextSeo
        title="Luck - Polityka prywatności Pan Mikołaj Luck"
        description="Zespół LUCK, jako twórca aplikacji LUCK, ułatwiającej organizowanie losowań prezentów, w swoich działaniach szanuje Twoją prywatność."
      />
      <BlogLayout>
        <Container>
          <Header>Polityka prywatności Pan Mikołaj Luck</Header>
          <Text>
            Zesp&oacute;ł LUCK, jako tw&oacute;rca aplikacji LUCK, ułatwiającej organizowanie
            losowań prezent&oacute;w, w swoich działaniach szanuje Twoją prywatność. Chronimy
            prywatność os&oacute;b korzystających z Pan Mikołaj Luck na platformie Google Asystent,
            w spos&oacute;b opisany poniżej.
          </Text>
          <Text>
            Niniejsza Polityka prywatności pomaga zrozumieć, jakie dane osobowe oraz inne informacje
            gromadzimy w celu ulepszenia naszych usług, a jednocześnie informujemy o tym, jak te
            dane są wykorzystywane dla ułatwienia korzystania z oferowanych usług przez naszych
            użytkownik&oacute;w.
          </Text>
          <Text>
            &bdquo;Dane osobowe" oznaczają informacje, kt&oacute;re umożliwiają jednoznaczną
            identyfikację użytkownik&oacute;w jako indywidualnych os&oacute;b fizycznych. W ramach
            świadczenia usługi, możemy r&oacute;wnież zbierać inne informacje, kt&oacute;rych nie
            można przypisać żadnej konkretnej osobie, a przez to nie można zidentyfikować
            indywidualnych użytkownik&oacute;w. By ulepszać nasze usługi, zbieramy i wykorzystujemy
            tylko drugi rodzaj danych.
          </Text>
          <List>
            <li>
              <Text>
                Administratorem Twoich danych osobowych jest zesp&oacute;ł LUCK zwaną dalej:
                &bdquo;Administratorem&rdquo;. Z Administratorem danych można skontaktować się
                poprzez adres email&nbsp;
              </Text>
            </li>
            <li>
              <Text>
                Administrator wyznaczył inspektora ochrony danych, z kt&oacute;rym można
                skontaktować się poprzez email{' '}
                <BlogTextLink href="mailto:info@luck.org.pl">
                  info@luck.org.pl
                </BlogTextLink>
                . Z Inspektorem ochrony danych można się kontaktować we wszystkich sprawach
                dotyczących przetwarzania danych osobowych oraz korzystania z praw związanych z
                przetwarzaniem danych.
              </Text>
            </li>
            <li>
              <Text>
                Twoje dane osobowe przetwarzane są w związku z komunikacją przy użyciu Pan Mikołaj
                Luck. Twoje dane mogą być także przetwarzane, jeśli udzieliłeś odpowiedniej zgody, w
                celu prowadzenie komunikacji marketingowej, czyli wysyłki wiadomości z materiałami
                dotyczącymi aplikacji LUCK.
              </Text>
            </li>
            <li>
              <Text>
                Zbieramy i przetwarzamy dane, kt&oacute;re otrzymujemy z następujących
                źr&oacute;deł:
              </Text>
            </li>
            <List>
              <li>
                <Text>
                  informacje przekazane nam przez Ciebie poza Google Asystentem (np. w trakcie
                  kontaktu z zespołem LUCK);
                </Text>
              </li>
              <li>
                <Text>dane przekazane za pomocą Pan Mikołaj Luck.</Text>
              </li>
            </List>
            <li>
              <Text>
                Przetwarzamy za pomocą usługi Pan Mikołaj Luck następujące dane osobowe naszych
                użytkownik&oacute;w:
              </Text>
            </li>
            <List>
              <li>
                <Text>ID rozmowy,</Text>
              </li>
              <li>
                <Text>płeć,</Text>
              </li>
              <li>
                <Text>strefa czasowa,</Text>
              </li>
              <li>
                <Text>preferowany język.</Text>
              </li>
            </List>
            <li>
              <Text>
                Dane osobowe przetwarzane są na podstawie art. 6 ust. 1 lit. f) RODO, co oznacza że
                przetwarzanie jest niezbędne do realizacje prawnie uzasadnionego interesu
                administratora danych, polegającego na komunikacji z użytkownikami za pomocą
                narzędzia bot, na platformie Google Asystent, oraz prowadzenia marketingu
                bezpośredniego do użytkownik&oacute;w Pan Mikołaj Luck po wyrażeniu przez Ciebie
                zgody na otrzymywanie wiadomości marketingowych od zespołu LUCK, zawierających
                informacje o naszych usługach.
              </Text>
            </li>
            <li>
              <Text>
                Dane osobowe nie będą przetwarzane na podstawie art. 6 ust. 1 lit. b) RODO.
              </Text>
            </li>
            <li>
              <Text>
                Masz prawo do żądania od Administratora dostępu do treści Twoich danych osobowych
                oraz ich sprostowania, usunięcia, ograniczenia przetwarzania oraz ich przenoszenia.
                Masz prawo do wniesienia sprzeciwu wobec przetwarzania danych, w sytuacji kiedy
                przetwarzania opiera się na prawnie uzasadnionym interesie administratora. Możesz
                cofniąć wyrażoną zgodę w dowolnym momencie, bez wpływu na zgodność z prawem
                przetwarzania, kt&oacute;rego dokonano przed cofnięciem zgody. W przypadku
                stwierdzenia, iż przetwarzanie Twoich danych osobowych następuje niezgodnie z RODO i
                ustawą o ochronie danych osobowych, masz prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych.
              </Text>
            </li>
            <li>
              <Text>
                Odrębnym Administratorem Twoich danych jest r&oacute;wnież Google Inc., kt&oacute;ry
                przetwarza Twoja dane niezależnie od cel&oacute;w i podstaw prawnych przetwarzania.
                Twoje dane będą przetwarzane przez Google Inc. w zależności od zaakceptowanych przez
                Ciebie regulamin&oacute;w Google i wyrażonych na rzecz Google zg&oacute;d.
              </Text>
            </li>
            <li>
              <Text>
                Twoje dane osobowe będą przetwarzane do czasu skutecznego złożenia sprzeciwu wobec
                przetwarzania danych osobowych lub wycofania udzielonej zgody, będącej podstawą
                przetwarzania. Dane przetwarzane w celu dochodzenia lub obrony przed roszczeniami
                będą przetwarzane przez czas r&oacute;wny okresowi przedawnienia tych roszczeń.
              </Text>
            </li>
            <li>
              <Text>
                Nie przekazujemy Twoich danych osobowych poza teren Europejskiego Obszaru
                Gospodarczego, za wyjątkiem ponadnarodowego charakteru przepływu danych w ramach
                Google Asystenta, stosowanie do zasad określonych przez Google pod adresem:
                https://policies.google.com/privacy?hl=pl
              </Text>
            </li>
            <li>
              <Text>
                Jednocześnie chcielibyśmy poinformować Cię, że zesp&oacute;ł LUCK może zaktualizować
                niniejszą Politykę prywatności. O wszystkich zmianach zostaniesz poinformowany
                jeżeli zostawisz sw&oacute;j kontakt. Zmiany dotyczące praw użytkownika nigdy nie
                będą dokonywane bez uprzedniej prośby o zgodę na ich akceptację.
              </Text>
            </li>
          </List>
        </Container>
      </BlogLayout>
    </>
  );
};

export default Index;
