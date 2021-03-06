import numberWithCommas from '../../utils/numberWithCommas';

import {
  CountryName,
  DetailInfoContainer,
  DetailsContainer,
  InfoText,
  LeftInfoContainer,
  RightInfoContainer,
  TitleContainer,
  ArrayRenderContainer,
  ArrayRenderText,
  BordersContainer,
  BorderText,
  BorderButtonContainer,
  BorderButton,
} from '../../assets/styles/pages/DetailStyles';

function CountryData({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  borders,
  currencies,
  languages,
  handleClick,
}) {
  return (
    <DetailsContainer>
      <TitleContainer>
        <CountryName>{name}</CountryName>
      </TitleContainer>
      <DetailInfoContainer>
        <LeftInfoContainer>
          <InfoText>
            <strong>Native Name:</strong> {nativeName}
          </InfoText>
          <InfoText>
            <strong>Population:</strong> {numberWithCommas(population)}
          </InfoText>
          <InfoText>
            <strong>Region:</strong> {region}
          </InfoText>
          <InfoText>
            <strong>Sub Region:</strong> {subregion}
          </InfoText>
          <InfoText>
            <strong>Capital:</strong> {capital}
          </InfoText>
        </LeftInfoContainer>
        <RightInfoContainer>
          <InfoText>
            <strong>Top Level Domain:</strong> {topLevelDomain}
          </InfoText>
          <ArrayRenderContainer>
            <InfoText>
              <strong>Currencies:&nbsp;</strong>
            </InfoText>
            {!!currencies &&
              currencies.length > 0 &&
              currencies.length < 2 &&
              currencies.map((e) => {
                return <ArrayRenderText key={name}> {e.name}</ArrayRenderText>;
              })}
            {!!currencies &&
              currencies.length > 1 &&
              currencies.map((e) => {
                return <ArrayRenderText key={name}> {e.name},</ArrayRenderText>;
              })}
          </ArrayRenderContainer>
          <ArrayRenderContainer>
            <InfoText>
              <strong>Languages:&nbsp;</strong>
            </InfoText>
            {!!languages &&
              languages.length > 0 &&
              languages.length < 2 &&
              languages.map((e) => {
                return <ArrayRenderText key={name}>{e.name}</ArrayRenderText>;
              })}
            {!!languages &&
              languages.length > 1 &&
              languages.map((e) => {
                return (
                  <ArrayRenderText key={name}>{e.name},&nbsp;</ArrayRenderText>
                );
              })}
          </ArrayRenderContainer>
        </RightInfoContainer>
      </DetailInfoContainer>
      <BordersContainer>
        <BorderText>Border Countries:</BorderText>
        <BorderButtonContainer>
          {!!borders &&
            borders.length > 0 &&
            borders.map((borders) => {
              return (
                <BorderButton
                  key={borders}
                  onClick={() => handleClick(borders)}
                >
                  {borders}
                </BorderButton>
              );
            })}
        </BorderButtonContainer>
      </BordersContainer>
    </DetailsContainer>
  );
}

export default CountryData;
