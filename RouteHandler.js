import React, {useState, useEffect} from 'react';
import {NativeRouter, Route, Routes, useLocation} from 'react-router-native';
import Home from './src/components/Home/Home.js';
import PhotoDetail from './src/components/PhotoDetail/PhotoDetail.js';
import Search from './src/components/Search/Search.js';
import {View} from 'react-native';
const RouteHandler = () => {
  const [currentQuery, setCurrentQuery] = useState('random');
  const [currentPhotoClicked, setCurrentPhotoClicked] = useState(null);
  return (
    <View>
      {!currentPhotoClicked && <Search triggerSearch={setCurrentQuery} />}
      <NativeRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                query={currentQuery || 'random'}
                clickPhoto={setCurrentPhotoClicked}
              />
            }></Route>
          <Route
            path="/photo/:id"
            element={
              <PhotoDetail
                clickBack={() => setCurrentPhotoClicked('')}
                photo={currentPhotoClicked}
                query={currentQuery || 'random'}
              />
            }></Route>
        </Routes>
      </NativeRouter>
    </View>
  );
};
export default RouteHandler;
