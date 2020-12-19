import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style';
import  {actionCreators} from './store/index.js';

const Header = (props) => {
  const { focused,addBlur,addFocus } = props;

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
        
        <CSSTransition
          timeout={200}
          in={focused}
          >
          <NavSearch 
            className={focused ? 'focused' : ''} 
            onBlur={addBlur} 
            onFocus={addFocus}></NavSearch>
        </CSSTransition>
      </Nav>
      <Addition>
        <Button className="writting">写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
      
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  // 这个函数的作用是把store里面的数据，映射到props里面
  return {
    focused: state.header.focused,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBlur() {
      dispatch(actionCreators.searchBlur());
    },
    addFocus() {
      dispatch(actionCreators.searchFocus());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
