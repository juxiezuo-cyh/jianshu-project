import React, { Component }from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch, 
  Addition, 
  Button, 
  SearchWrapper, 
  SearchInfo, 
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList } from './style';
import { actionCreators } from './store/index.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.getListArea = this.getListArea.bind(this);
  }

  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一换 </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>简书</SearchInfoItem>
            <SearchInfoItem>生活</SearchInfoItem>
            <SearchInfoItem>学习</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, addBlur, addFocus } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              // className="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onBlur={addBlur}
                onFocus={addFocus}></NavSearch>
            </CSSTransition>
            { this.getListArea(focused) }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
  
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  // 这个函数的作用是把store里面的数据，映射到props里面
  return {
    focused: state.getIn(['header', 'focused'])
    // focused: state.get('header').get('focused'),
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
