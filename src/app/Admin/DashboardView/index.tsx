import React from 'react';
import styled from 'styled-components';
import { Box } from '../../../components';
import { Theme } from '../../../utils';
import { Table } from './table';
import media from "../../../utils/media"

interface IParticipantsView {
  name: string;
}

interface IPublishedHappeningView {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  participants: IParticipantsView[];
}

export interface DashboardViewData {
  happenings: IPublishedHappeningView[];
}

export interface DashboardViewProps {
  data: DashboardViewData;
}

function timeConverter(dateString: string){
  const a = new Date(dateString);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  if(Number.isNaN(date)) return ""
  return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
}

const mapToTableData: any = (happening: IPublishedHappeningView, lp: number) => {
  const { name, createdAt, description, participants } = happening;

  return {
    lp,
    createdAt: createdAt ? timeConverter(createdAt) : "",
    name,
    description,
    participants: participants.reduce((prev, {name}) => `${prev} ${name},`,""),
    participantsLength: participants.length,
  };
};

const Index = ({ data: { happenings }, ...props }: DashboardViewProps) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Lp',
        accessor: 'lp',
      },
      {
        Header: 'Created',
        accessor: 'createdAt',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Participants',
        accessor: 'participants',
      },
      {
        Header: 'length',
        accessor: 'participantsLength',
      },
    ],
    [],
  );

  return (
    <Index.Container {...props}>
      <Table columns={columns} data={happenings.map((happening, index) => mapToTableData(happening, index + 1))} />
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  overflow: scroll;
  margin: 0 auto;
  color: ${Theme.colors.black};
  text-align: center;
  
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.black};
  flex-wrap: wrap;
  max-width: 1012px;
  padding: ${Theme.space.small}px ${Theme.space.xregular}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px 0;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1138px;
    padding: ${Theme.space.xregular}px 0;
  `}
`;

export default Index;
