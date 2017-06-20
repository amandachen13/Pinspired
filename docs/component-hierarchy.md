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
| "/signup"                  | "AuthFormContainer" |
| "/login"                   | "AuthFormContainer" |
| "/"                        | "HomeContainer"     |
| "/:username"               | "UserContainer"     |
| "/:username/followers"     | "FollowsContainer"  |
| "/:username/following"     | "FollowsContainer"  |
| "/:username/pins"          | "PinsContainer"     |
| "/:username/boards"        | "BoardsContainer"   |
