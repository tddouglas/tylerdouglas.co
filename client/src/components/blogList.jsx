import React, { Component } from "react";
import BlogPost from "./blogPost";

class BlogList extends Component {
    state = {
        blogposts: [
            {
                id: 1,
                img_src: "https://picsum.photos/seed/randi/300/200",
                title: "Big Article A",
                date: "Dec 2021",
            },
            {
                id: 2,
                img_src: "https://picsum.photos/seed/other/300/200",
                title: "Big Article B",
                date: "Dec 2021",
            },
            {
                id: 3,
                img_src: "https://picsum.photos/seed/test/300/200",
                title: "Big Article C",
                date: "Dec 2021",
            },
        ],
    };

    handleDeleteArticle = (postId) => {
        const blogposts = this.state.blogposts.filter(
            (pid) => pid.id !== postId
        );
        this.setState({ blogposts });
    };

    render() {
        return (
            <div className={"l-blog-list"}>
                {this.state.blogposts.map((blogpost) => (
                    <BlogPost
                        key={blogpost.id}
                        blogpost={blogpost}
                        onDelete={this.handleDeleteArticle}
                    />
                ))}
            </div>
        );
    }
}

export default BlogList;
