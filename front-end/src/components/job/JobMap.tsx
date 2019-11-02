import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UnderLine } from 'styles/common';
import palette from 'styles/palette';

declare const kakao: any;

const MapWrapper = styled.div`
  width: 20.3125rem;
  height: 18.75rem;
  background-color: ${palette.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  /* ::after {
    content: '위치 정보가 없습니다.';
  } */
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const TitleBorder = styled(UnderLine)`
  display: block;
  width: 9.2rem;
  margin-bottom: 1rem;
`;

interface JobMapProps {
  company: string;
  location: string;
}
const JobMap: React.FC<JobMapProps> = ({ company, location }) => {
  const setCompanyMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(location, (result: Array<any>, status: string) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const position = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${company}</div>`,
        });
        infowindow.open(map, marker);
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(position);
      }
    });
  };

  useEffect(() => {
    if (location) setCompanyMap();
  });
  console.log('location', location);
  return (
    <React.Fragment>
      <Title>How to Find Us</Title>
      <TitleBorder />
      <MapWrapper id="map"></MapWrapper>
    </React.Fragment>
  );
};

export default JobMap;
