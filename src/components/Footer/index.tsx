import mock from './mock'

import * as S from './styles'

const Footer = () => {
  const date = new Date()

  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.png"
        alt="Letters DSI and words DWIDASA, SAMSARA, INDONESIA"
      />
      <S.Content>
        <S.Address>
          <h4>PT Dwidasa Samsara Indonesia</h4>
          <div>
            <span>Ruko Jalur Sutera 29A No. 53</span>
            <span>Alam Sutera Serpong, Tangerang 15323</span>
          </div>
        </S.Address>

        <S.Contact>
          <h3>Contact</h3>
          <div>
            <span>Phone : +62.21.5314.1135</span>
            <span>Fax : +62.21.5314.1135</span>
            <span>Email : community@dwidasa.com</span>
          </div>
        </S.Contact>

        <S.Platform>
          {mock.map((item, index) => (
            <img
              key={`platform-${index}`}
              id={`platform-${index}`}
              src={item.src}
              alt={`icon of ${item.alt}`}
            />
          ))}
        </S.Platform>
      </S.Content>
      <S.Copyright>{`Copyright © ${date.getFullYear()} - Dwidasa Samsara Indonesia`}</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
