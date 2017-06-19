## Component Hierarchy

**AuthFormContainer**
  - SignupForm
  - LoginForm

**HomeContainer**

  - **NavBar**
    + Logo
    + Discover
    + Logout

  - **SearchContainer** (Bonus?)
    + Search

  - **NewPin**
    + NewPin

  - **NewBoard**
    + NewBoard

  - **UserContainer**
    + UserDetail
    - **FollowsContainer**
      + Followers
      + Following
    - **BoardsContainer**
      + BoardIndex
      + BoardDetail
        * PinsContainer
      + EditBoard
    - **PinsContainer**
      + PinIndex
      + PinDetail


## Routes

| Path                       | Component           |
|----------------------------|---------------------|
| "/new"                     | "AuthFormContainer" |
| "/login"                   | "AuthFormContainer" |
| "/"                        | "HomeContainer"     |
| "/users/:userId"           | "UserContainer"     |
| "/users/:userId/followers" | "FollowsContainer"  |
| "/users/:userId/following" | "FollowsContainer"  |
| "/users/:userId/pins"      | "PinsContainer"     |
| "/users/:userId/boards"    | "BoardsContainer"   |
