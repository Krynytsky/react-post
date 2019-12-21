const Fragment = React.Fragment;
//data layer
let loaded = false;
let post1IsClosed = true;
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
const PostImg = props => {
    const {src} = props;
    return src && <img className="post-img" src={src} alt="post-img"/>
};
const Post = props => {
    const {post} = props;
    return(
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
                <ClosePost/>
            </div>
        </div>
    );
};
const ClosePost = props =>{
   return (<Fragment>
        <button className={"closePost"}>Close post</button>
    </Fragment>);
};
const App = props => {
    const{loaded,post1,post2,post1IsClosed,post2IsClosed}= props.data;
    return ( loaded ?
        <Fragment>
            { post1IsClosed || <Post post={post1}/>}
            {post2IsClosed || <Post post={post2}/>}
        </Fragment>: <Loader/>);
};
const Loader = () => {
    return(
        <Fragment>
            <h1>Pleace wait!The page is loading...</h1>
        </Fragment>)
};


const renderUI = () => {
    ReactDOM.render(<App data={{loaded,post1,post2,post1IsClosed,post2IsClosed}}/>, document.getElementById('root'));
}


//logic layer

renderUI();
//show UI with 4sec timeout
setTimeout(() => {
    loaded = true;
    renderUI();
},1000);

// setTimeout(()=>{
//     loaded = true;
//     if(loaded !== false){
//         ReactDOM.render(
//             <Fragment>
//                 <Post post = {post1}/>
//             </Fragment>
//             ,document.getElementById('root'));}
//     else{
//         ReactDOM.render(
//             <Fragment>
//                 <p>loading..</p>
//             </Fragment>
//             ,document.getElementById('root'));
//     }
// },7000);
