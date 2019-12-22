const Fragment = React.Fragment;

//data layer
let loaded = false;
let post1IsClosed = false;
let post2IsClosed = false;
const post1 = {
    name : "Yuri Prubylskiy",
    text : "Lorem ipsum dolor sit amet,Lorem ipsum lorem",
    userIcon: "https://reactjs.org/logo-og.png",
    date: new Date().toTimeString(),
    postImg: null
};
const post2 = {
    name : "Viktor Daniels",
    text : "Lorem ipsum dolor sit amet,Lorem ipsum lorem sfrg dfbg",
    userIcon: "img/me.jpg",
    date: new Date().toTimeString(),
    postImg: "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
};

//UI layer
const Loader = () => {
    return(
        <Fragment>
            <h1>Pleace wait!The page is loading...</h1>
        </Fragment>)
};
const PostImg = props => {
    const {src} = props;
    return src && <img className="post-img" src={src} alt="post-img"/>
};
const Post = props => {
    console.log(props);
    const {post,isClosed,onCloseRequest} = props;
    return isClosed || (
        <div className="post">
            <div className="userElem">
                <img className="user-icon" src={post.userIcon} alt="user-icon" role="img"/>
                <sup className="user-name">{post.name}</sup>
            </div>
            <div className="post-content">
                <p>{post.text}</p>
                <PostImg src={post.postImg}/>
            </div>
            <div className="date">
                <p>Published:{post.date}</p>
            </div>
            <div className="close">
                {/*<Fragment>*/}
                {/*    <ClosePost/>*/}
                {/*</Fragment>*/}
                <button className={"closePost"} onClick={onCloseRequest}>Close</button>
            </div>
        </div>
    );
};
// const ClosePost = props =>{
//     const{onCloseRequest}=props;
//    return (
//         <button className="closePost" onClick={onCloseRequest}>Close</button>);
// };
const App = props => {
    console.log('AppProps', props);
    const{loaded,post1,post2,post1IsClosed,
          post2IsClosed,closePost1,closePost2}= props.data;
    return ( loaded ?
        <Fragment>
            <Post post={post1} isClosed={post1IsClosed} onCloseRequest={closePost1}/>
            <Post post={post2} isClosed={post2IsClosed} onCloseRequest={closePost2}/>
        </Fragment>:
        <Loader/>);
};
const renderUI = () => {
    ReactDOM.render(<App data={{loaded,post1,post2,post1IsClosed,post2IsClosed,
        closePost1,closePost2}}/>, document.getElementById('root'));
}

//logic layer
renderUI();
const closePost1 = () =>{
    post1IsClosed = true;
    renderUI();
}

const closePost2 = () => {
    post2IsClosed = true;
    renderUI();
}

setTimeout(() => {
    loaded = true;
    renderUI();
},2000);

// setInterval(()=>{
//     post1IsClosed = false;
//     post2IsClosed = false;
//     renderUI();
// },5000);
