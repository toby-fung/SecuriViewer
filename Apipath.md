This is how you acess the steams user needs to have a auth token look this up its not too bad just firebase docs
``` js
import auth from "@react-native-firebase/auth";
import Video from "react-native-video";

const token = await auth().currentUser.getIdToken();

<Video
  source={{
    uri: `${BASE_URL}/cams/front1/index.m3u8`,
    headers: { Authorization: `Bearer ${token}` },
  }}
  muted
  resizeMode="contain"
  onError={handleError}
/>
```
