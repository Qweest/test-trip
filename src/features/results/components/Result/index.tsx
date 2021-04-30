import React, { useMemo } from 'react';

import { getDateStringFromSeconds } from '../../../../utils/helpers';
import { Flight } from '../../../search/api/entities';
import Row from '../../../../components/Row';
import {
  Wrapper,
  RouteWrapper,
  InfoWrapper,
  DurationWrapper,
  City,
  Code,
  Duration,
  Date,
  Price,
  Separator,
} from './styles';

interface Props {
  className?: string;
  data: Flight;
}

const Result: React.FC<Props> = (props) => {
  const { className, data } = props;
  const {
    flyFrom,
    flyTo,
    cityFrom,
    cityTo,
    dTimeUTC,
    aTimeUTC,
    route,
    price,
    fly_duration,
    return_duration,
  } = data;
  const returnTimes = useMemo(() => {
    const returnFrom = route.find((it) => it.flyFrom === flyTo);
    const returnTo = route[route.length - 1];

    return {
      dTimeUTC: returnFrom?.dTimeUTC || 0,
      aTimeUTC: returnTo.aTimeUTC,
    };
  }, [data]);

  return (
    <Wrapper className={className}>
      <RouteWrapper>
        <InfoWrapper>
          <Row marginMultiplier={0.5}>
            <City>{cityFrom}</City>
            <Code>{flyFrom}</Code>
          </Row>
          <Date>{getDateStringFromSeconds(dTimeUTC)}</Date>
        </InfoWrapper>
        <DurationWrapper>
          <Duration>
            <span>{fly_duration}</span>
          </Duration>
        </DurationWrapper>
        <InfoWrapper alignEnd>
          <Row marginMultiplier={0.5}>
            <City>{cityTo}</City>
            <Code>{flyTo}</Code>
          </Row>
          <Date>{getDateStringFromSeconds(aTimeUTC)}</Date>
        </InfoWrapper>
      </RouteWrapper>
      <Separator />
      {!!returnTimes.dTimeUTC && (
        <RouteWrapper>
          <InfoWrapper>
            <Row marginMultiplier={0.5}>
              <City>{cityTo}</City>
              <Code>{flyTo}</Code>
            </Row>
            <Date>{getDateStringFromSeconds(returnTimes.dTimeUTC)}</Date>
          </InfoWrapper>
          <DurationWrapper>
            <Duration>
              <span>{return_duration}</span>
            </Duration>
          </DurationWrapper>
          <InfoWrapper alignEnd>
            <Row marginMultiplier={0.5}>
              <City>{cityFrom}</City>
              <Code>{flyFrom}</Code>
            </Row>
            <Date>{getDateStringFromSeconds(returnTimes.aTimeUTC)}</Date>
          </InfoWrapper>
        </RouteWrapper>
      )}
      <Price>{price} €</Price>
    </Wrapper>
  );
};

export default Result;
