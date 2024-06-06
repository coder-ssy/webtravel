import '../components/KakaoMapStyles.css';
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk"

function KakaoMap() {
const {kakao} = window;
    const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [searchInputValue, setSearchInputValue] = useState("");
const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(keyword, (data, status, _pkagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })
  }, [map, keyword])

  const handleKeyPress = (e) => {
    if (e.key === "Enter") setKeyword(searchInputValue);
  };

  return (
    <div className="kakao-map">
    <input
    	onChange={(e) => setSearchInputValue(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        value={searchInputValue}
        placeholder={"장소를 입력해주세요 ex)서울특별시 역삼동 or 경복궁"}
        className='kakao-input'
    />
    <button onClick={() => setKeyword(searchInputValue)}>
      검색
    </button>
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "350px",
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"#000"}}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
    </div>
  )
}

export default KakaoMap;
