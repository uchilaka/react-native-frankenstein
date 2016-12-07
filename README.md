# Hello, Frankenstein!
I'm actively learning to use React Native, after giving some thought to the choice between <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> 
and <a href="http://docs.nativescript.org/" target="_blank">NativeScript</a>. Ultimately, the decision to go with React Native (for me) came down to the following:

* *Facebook* is a larger organization than the *Progress Software Corporation*. Their work on NativeScript looks to accomplish the same, and 
to be honest, a better fit in principle for me since I'm an AngularJS developer, but I'm also curious about existing plugins, social login etc. 
in native apps, and would like to leverage what seems to be a larger collection of components available for React Native.

* The Facebook app is a widely known, widely used mobile application, that accomplishes a number of great features. That example is a compelling one 
that indicates that Facebook's approach with creating *React Native* had to take into consideration ALL they would like to do with their native 
app, serving over 1 billion users worldwide

* I'm joining a project that's written in <a href="http://www.telescopeapp.org/" target="_blank">Telescope</a>, which is <a href="https://www.meteor.com/" target="_blank">Meteor</a> + <a href="https://facebook.github.io/react/docs/hello-world.html">React</a> framework. 
working with React Native will get me in a *React frame of mind* for participating in that project.  

Please take these considerations with a grain of salt. Your answer, may be NativeScript if you already have an AngularJS skillbase and 
don't have any immediate need to work with super-native functionality (you might have to write components of your own - and you can!). I 
encourage all to give NativeScript a look first before going any further. They both appeal to me for their *all-native code output* approach. 
If it helps, <a href="http://blog.backand.com/angular-2-nativescript-vs-react-native/" target="_blank">this article</a> was also a great source of information while 
I grappled with the decision.

# Why Frankenstein?
I noticed the tutorials on the <a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">React Native getting started page</a> were in bits and pieces, and I found myself 
wanting an *all-in* example of the framework in action (it might be someplace - haven't found it yet). So, I'm sharing my hodge-podge project as I put together the sample 
code from the tutorials, as well as leverage a couple libraries to accomplish some tasks easier (in my opinion).

The intent is to keep this updated as I find better tools for different things - maintain different branches if necessary to illustrate all the different approaches.

**Please use this as a reference while you go through the React Native getting started guide - this is NOT a replacement for that**, just all the sample code together in a buildable project. 

Enjoy! Hope this helps.  

## 1. Build 
To build the frankenstein project, complete the following steps:

* Install npm and nodejs 
If you don't already have these tools yet, get and install them for your platform. 

* Install React Native 
There's a great guide <a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">here</a>. 

* Clone the repo: 
```
git clone https://github.com/uchilaka/react-native-frankenstein.git {your_directory_name}
```

* Install the node dependencies
```
npm install 
```

* Build & Run the app 
To run the app for iOS, you need <a href="https://itunes.apple.com/us/app/xcode/id497799835?mt=12" target="_blank">Xcode</a> installed. To run on android, you (probably - ask me later, when I've gotten to it) need <a href="https://developer.android.com/studio/index.html" target="_blank">Android Studio</a>.
- For iOS (I haven't done any work on android yet): `react-native run-ios`
- Each time you make a change to the project, one of React Native's great features is that all you need to do is hit `Command⌘ + R` and your simulator will automatically refresh to the latest version of your code. Pretty sweet! 

<em>On Twitter <a href="https://twitter.com/uchechilaka" target="_blank">@uchechilaka</a></em>.