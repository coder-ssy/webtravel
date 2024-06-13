import '../components/TripStyles.css';
import TripData from './TripData';
import Trip1 from '../assets/7.png';
import Trip2 from '../assets/8.png';
import Trip3 from '../assets/9.png';

function ContactListForm() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Kakao Maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="전주 한옥마을 여행"
          text="전주한옥마을은 전라북도 전주시에 위치한 전통 한옥 마을로, 약 700여 채의 한옥이 모여 있어 한국 전통 건축 양식을 느낄 수 있는 곳입니다. 전동성당, 경기전 등 역사적인 명소와 함께 한옥 체험, 한복 체험, 전통 공예 체험 등 다양한 프로그램이 운영됩니다. 또한, 전주비빔밥 등 전통 음식을 맛볼 수 있어 한국 전통 문화를 깊이 있게 경험할 수 있는 매력적인 여행지입니다."
        />
        <TripData
          image={Trip2}
          heading="제주도 여행"
          text="제주도는 한국의 대표적인 휴양지로, 천혜의 자연경관과 다채로운 문화 체험을 제공하는 섬입니다. 유네스코 세계자연유산으로 지정된 한라산은 아름다운 등산로와 독특한 식생으로 많은 이들의 사랑을 받고 있습니다. 또한, 제주도에는 푸른 바다와 검은 현무암 해변이 어우러진 협재 해수욕장과 함덕 해수욕장 같은 명소가 있어 휴양을 즐기기에 최적입니다."
        />
        <TripData
          image={Trip3}
          heading="강릉 여행"
          text="강릉은 한국 동해안에 위치한 아름다운 도시로, 경포해변과 정동진 해변 같은 해변 명소와 오대산 국립공원, 경포호 등의 자연 경관을 자랑합니다. 강릉한옥마을과 강릉커피거리에서 전통과 현대 문화를 체험할 수 있으며, 오죽헌 같은 역사적인 명소도 있습니다. 신선한 해산물, 초당두부, 다양한 빵집 등 맛있는 먹거리가 풍부하여 누구나 만족할 수 있는 여행지입니다. 강릉은 자연, 문화, 음식이 어우러져 특별한 추억을 만들기에 최적의 선택입니다."
        />
      </div>
    </div>
  );
}

export default ContactListForm;
