import styled from "styled-components";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
/**
 * 코드스플리팅 방식
 * -> 여기서 필요한 페이지 말고 나머지들을 다 import하는건 리소스낭비임
 * 그래서 필요한 페이지만 불러오는 라이브러리 loadable 을 이용하는것
 */
const Index = loadable(() => import("./Components"));
const My = loadable(() => import("./Components/my"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Redirect exact path="/" to="/login" /> */}
        <Route exact path="/" component={Index} />
        <Route exact path="/my" component={My} />
        {/* <Route path="/workspace/:workspace" component={Workspace} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
