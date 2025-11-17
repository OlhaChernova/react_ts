import { Info, Title, NikePage, NikeInfo, Li } from "./styles";

function Nike() {
  return (
    <NikePage>
      <NikeInfo>
        <Title>Nike</Title>
        <Info>
          <Li>Основание: 1964, США </Li>
          <Li>Основатель: Фил Найт, Билл Бауэрман</Li>
          <Li>Специализация:Спортивная обувь, одежда и аксессуары</Li>
          <Li>
            Особенности бренда: Логотип Swoosh, технологии Air, сильный
            маркетинг
          </Li>
        </Info>
      </NikeInfo>
    </NikePage>
  );
}

export default Nike;
