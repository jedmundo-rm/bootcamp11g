// URL Base
const API_URL = "http://localhost:8080";

// Endpoints
const postURL = `${API_URL}/posts/`;
const postDetailURL = (id) => `${API_URL}/posts/${id}/`;
const postLoginURL =  `${API_URL}/users/login/`


// Requests user
const usersURL = `${API_URL}/users/`;
const userDetailURL = (id) => `${API_URL}/users/${id}/`;

const repliessURL = `${API_URL}/replies/`;
const repliesByPostURL = (id) => `${API_URL}/replies/${id}/`;

export const postUser = async (data) => {
    const response = await fetch(usersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };

  export const postLogin = async (data) =>{
    const response = await fetch(postLoginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
}

// Requests Post
export const getPostDetail = async (id) => {
  try {
    const url = postDetailURL(id);
    
    const response = await fetch(url);
    const singlePost = await response.json();
    console.log(singlePost.data);
    return singlePost.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(postURL);
    const allPost = await response.json();
    console.log(allPost.data);
    return allPost.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const postPost = async (data) => {
  const response = await fetch(postURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// update

export const patchPost = async (id, data) => {
    const url = postDetailURL(id);
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };

  export const getUserDetail = async (id) => {
    try {
      const url = userDetailURL(id);
      
      const response = await fetch(url);
      const singleUser = await response.json();
      console.log(singleUser.data);
      return singleUser.data.users;
    } catch (error) {
      console.log(error);
    }
  };

  export const getRepliesByPost = async (id) => {
    try {
      const url = repliesByPostURL(id);
      
      const response = await fetch(url);
      const RepliesByPost = await response.json();
      console.log(RepliesByPost.data);
      return RepliesByPost.data.replies;
    } catch (error) {
      console.log(error);
    }
  };

  export const postReply = async (data) => {
    try {
      const response = await fetch(repliessURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
