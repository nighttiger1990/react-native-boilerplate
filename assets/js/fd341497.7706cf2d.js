"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6771],{5119:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/11/30/React-Native-Boilerplate-4.0.0","metadata":{"permalink":"/react-native-boilerplate/blog/2023/11/30/React-Native-Boilerplate-4.0.0","editUrl":"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/blog/blog/2023-11-30-React-Native-Boilerplate-4.0.0.md","source":"@site/blog/2023-11-30-React-Native-Boilerplate-4.0.0.md","title":"React Native Boilerplate 4.0.0","description":"What\'s new?","date":"2023-11-30T00:00:00.000Z","formattedDate":"November 30, 2023","tags":[{"label":"v4","permalink":"/react-native-boilerplate/blog/tags/v-4"},{"label":"boilerplate react","permalink":"/react-native-boilerplate/blog/tags/boilerplate-react"},{"label":"react-native","permalink":"/react-native-boilerplate/blog/tags/react-native"},{"label":"kickstart","permalink":"/react-native-boilerplate/blog/tags/kickstart"}],"readingTime":3.025,"hasTruncateMarker":true,"authors":[{"name":"J\xe9r\xe9my doll\xe9","title":"Maintainer of the React Native Boilerplate","url":"https://github.com/JeremyDolle","imageURL":"https://avatars.githubusercontent.com/u/15814069?v=4","key":"jed"}],"frontMatter":{"title":"React Native Boilerplate 4.0.0","authors":"jed","description":"What\'s new?","hide_table_of_contents":false,"tags":["v4","boilerplate react","react-native","kickstart"]},"unlisted":false,"nextItem":{"title":"React Native Boilerplate 3.0.0","permalink":"/react-native-boilerplate/blog/2020/04/19/React-Native-Boilerplate-3.0.0"}},"content":"After using the boilerplate on several projects, \\nwe decided to revisit some important aspects while still adhering to the core principles of the boilerplate: \\nseparation of concerns, ease of setup, and maintainability. \\nWe made several enhancements, which we\'ll detail here.\\n\\n\x3c!--truncate--\x3e\\n\\n\\n## Improved Theming\\nTheming is a crucial aspect of any application. \\nPreviously, we had designed a layered theming system where all variables could be customized for each theme, \\nincluding base colors and spacing. \\nUpon reflection, we found that this system, while effective, wasn\'t the most straightforward to use, \\nespecially with the layered naming convention.\\n\\nAdditionally, being able to modify spacing between themes didn\'t make sense. \\nFurthermore, the variable names we used weren\'t always intuitive. \\nFor instance, terms like \'medium\' or \'large\' didn\'t allow for easy interpolation between them. \\nIt was even harder to find an intermediate value between \'medium\' and \'regular,\' for example.\\n\\nAs a result, we decided to simplify and improve the theming process, making it more efficient and comprehensive.\\n\\n### Configuration\\nEverything now revolves around a configuration file named `_config.ts`. \\nThis file serves as a central configuration point where you can define the base theme values and declare theme variants. \\nWe\'ve moved away from the complex layering system in favor of a more reflective system with main themes and variants.\\n\\n### Theme Provider\\nTo boost performance, we introduced a `ThemeProvider` component. This component provides the theme to the application, \\npreventing the need to regenerate the theme with every `useTheme` call.\\n\\n### Type Inference\\nWe\'ve also improved the type inference of the theme. Now each generated style is typed according to the theme configuration even if there are variants.\\nFor example, let\'s imagine a configuration like this:\\n\\n```ts title=/src/theme/_config.ts\\nexport const config = {\\n    //...\\n    fonts: {\\n        //...\\n        colors: {\\n            primary: \'blue\',\\n        },\\n    },\\n    //...\\n    variants: {\\n        dark: {\\n            fonts: {\\n                colors: {\\n                    primary: \'darkblue\',\\n                },\\n            },\\n        },\\n        premium: {\\n            fonts: {\\n                colors: {\\n                    primary: \'gold\',\\n                },\\n            },\\n        }\\n    }\\n}\\n```\\n\\nThe generated type will be inferred at the perfect level:\\n![powerful typescript](./assets/theme-infer.png)\\n\\n\\n## Goodbye Redux \ud83e\udd27\\nRedux is a fantastic library, but it\'s not always the best solution for every project.\\nWhen we started the boilerplate, our goal was to provide a comprehensive solution for state management. In our initial version, we integrated Redux, Redux Persist, and Redux Saga, to name a few. These libraries were essential for managing the application\'s state, handling asynchronous requests, and persisting data.\\n\\nHowever, over time, alternative solutions emerged, \\nparticularly in the realm of data fetching. \\nIt was with Redux Toolkit Query that we began version 3. \\nNonetheless, we decided to part ways with it for version 4.\\n\\nOur aim has always been to offer a lightweight yet comprehensive solution \\nwithout being too opinionated. Thus, we chose to remove Redux from the boilerplate \\nin favor of lighter and more straightforward alternatives. \\nIt\'s important to note that global state management remains crucial in an application, \\nand several options are available:\\n\\n- Redux\\n- Mobx\\n- Zustand\\n- Jotai\\n- React Context\\n- And more...\\n\\nNow, in this version, for data fetching, we now use React Query, \\nan excellent library that\'s straightforward to use. \\nAs for data storage, we rely on React Native MMKV, a native library known for its high performance and secure, \\nsynchronous data storage capabilities.\\n\\n## Enhanced Documentation \ud83d\udc99\\nWe also took the opportunity to enhance the documentation. \\nIt\'s now clearer and more comprehensive. \\nWe\'ve made an effort to make the documentation more accessible and easier to understand. \\nAt times, we\'ve added \'playgrounds\' in the section related to theme generation, \\nallowing you to directly test the values you want and see the results for yourself"},{"id":"/2020/04/19/React-Native-Boilerplate-3.0.0","metadata":{"permalink":"/react-native-boilerplate/blog/2020/04/19/React-Native-Boilerplate-3.0.0","editUrl":"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/blog/blog/2020-04-19-React-Native-Boilerplate-3.0.0.md","source":"@site/blog/2020-04-19-React-Native-Boilerplate-3.0.0.md","title":"React Native Boilerplate 3.0.0","description":"What\'s in the box? \ud83d\udce6","date":"2020-04-19T00:00:00.000Z","formattedDate":"April 19, 2020","tags":[{"label":"boilerplate","permalink":"/react-native-boilerplate/blog/tags/boilerplate"},{"label":"starter-kit","permalink":"/react-native-boilerplate/blog/tags/starter-kit"},{"label":"starter","permalink":"/react-native-boilerplate/blog/tags/starter"},{"label":"kit","permalink":"/react-native-boilerplate/blog/tags/kit"},{"label":"react","permalink":"/react-native-boilerplate/blog/tags/react"},{"label":"native","permalink":"/react-native-boilerplate/blog/tags/native"},{"label":"react-native","permalink":"/react-native-boilerplate/blog/tags/react-native"},{"label":"javascript","permalink":"/react-native-boilerplate/blog/tags/javascript"},{"label":"typescript","permalink":"/react-native-boilerplate/blog/tags/typescript"}],"readingTime":6.435,"hasTruncateMarker":true,"authors":[{"name":"J\xe9r\xe9my doll\xe9","title":"Maintainer of the React Native Boilerplate","url":"https://github.com/JeremyDolle","imageURL":"https://avatars.githubusercontent.com/u/15814069?v=4","key":"jed"}],"frontMatter":{"title":"React Native Boilerplate 3.0.0","authors":"jed","description":"What\'s in the box? \ud83d\udce6","hide_table_of_contents":false,"tags":["boilerplate","starter-kit","starter","kit","react","native","react-native","javascript","typescript"]},"unlisted":false,"prevItem":{"title":"React Native Boilerplate 4.0.0","permalink":"/react-native-boilerplate/blog/2023/11/30/React-Native-Boilerplate-4.0.0"}},"content":"Welcome aboard! \ud83d\udee5\ufe0f\\n\\nAs we have active users that uses this boilerplate, we will try to improve communication about updates\\nwe\'re releasing. It\'s important for us to give you new reasons to try this boilerplate out!\\nWe would love to have new ideas to make it even more convenient!\\n\\nTo do so, we will post a changelog every major updates. Unlike the changelog in the releases tab, we\\nwill here provide more details and maybe some examples. \\n\\nIn this first post, we will present the current state of this boilerplate.\\n\\n\x3c!--truncate--\x3e\\n\\n## Light \ud83e\udeb6 Simple \ud83d\udc4c and Scalable \ud83d\udccf\\nThis boilerplate is the core of every react-native applications we develop at [TheCodingMachine](https://www.thecodingmachine.com/).\\nThis means that we are the first users! If an issue appear we are the first affected \ud83e\udd7a, that\'s why this project is actively maintained!\\n\\nThe main idea behind this boilerplate is to have just the necessary and well-known stuff to have a very\\n\\"*easy to use*\\" boilerplate for little and big real world apps.\\n\\nWe don\'t include components libraries, we don\'t depend on third-party libraries (like Firebase for example).\\nIt\'s just a good template project that is build on top of all the accumulated experience of our mobile teams.\\nIt also provides a solid architecture that facilitates separation of concerns between the UI, the state management\\nand the business logic.\\nLike that, everyone can add its own touch! \ud83d\udd8c\ufe0f\\n\\n\ud83d\udea8 Every decision about the technical stack are made regarding our preferences (every library has his\\npros and cons).\\n\\n## Easy to install \ud83d\ude0e\\n\\nInstallation has been facilitated since the v2.0.0, thanks to the use of the react-native-cli and \\n[custom template](https://github.com/react-native-community/cli/blob/master/docs/init.md#creating-custom-template).\\nTo run this boilerplate, the only commands you need are\\n\\n```\\nnpx react-native init --template @thecodingmachine/react-native-boilerplate\\nyarn start\\nyarn ios\\nyarn android\\n```\\n\\nThat\'s this simple! \ud83d\ude80\\n\\n## Typescript support \ud83d\udc99\\n\\nSince the v3.0.0, during the installation, you can choose to use typescript for your new app. \\nAll the boilerplate will then be translated in typescript.\\n\\n![Typescript init](./assets/typescript.png)\\n\\nThat\'s this simple! \ud83d\ude80\\n\\n## Solid libraries \ud83d\udd28\\n\\nAs I said before, main concerns are simplicity and scalability.\\nEach of the used libraries are well-known, tried and tested. \\n\\n### Well-know libraries\\n\\nFor the state management we use [**Redux**](https://redux.js.org/) (redux + redux toolkit + redux persist). \\nSome people like it, some people don\'t.\\nWe are really comfortable with this library, it\'s not so difficult to learn, and the implementation is well-known, \\nrecognized as a good choice and easy to debug! \\nThanks to this boilerplate and [redux-toolkit](https://redux-toolkit.js.org/), the state management is ready out of the box. \\nA complete example is even included. This way, you can easier understand how it works.\\nTo deal with the navigation, [**React Navigation**](https://reactnavigation.org/) is THE reference for screen navigation.\\nFor the internationalization we use [**I18next**](https://www.i18next.com/). Well-know library, really easy to use and \\nproviding nice hooks.\\n\\n### redux-toolkit-wrapper\\nThis project is a Redux-toolkit wrapper (yes... it\'s obvious \ud83d\ude05) used to write less code regarding classic CRUD operations.\\nRedux-toolkit provide a lot of abstraction for async operations, but we always have to create a `loading` and `error` \\nstate and associated reducers.\\nRedux-toolkit-wrapper abstract these async operations. For a classic *\\"fetch one user\\"* operation all you need is adding these files :\\n\\n```javascript title=\\"src/Store/User/FetchOne.js\\"\\nimport {\\n  buildAsyncState, buildAsyncReducers, buildAsyncActions,\\n} from \'@thecodingmachine/redux-toolkit-wrapper\'\\nimport fetchOneUserService from \'@/Services/User/FetchOne\'\\n\\nexport default {\\n  initialState: buildAsyncState(\'fetchOne\'),\\n  action: buildAsyncActions(\'user/fetchOne\', fetchOneUserService),\\n  reducers: buildAsyncReducers({\\n    errorKey: \'fetchOne.error\',\\n    loadingKey: \'fetchOne.loading\',\\n  }),\\n}\\n\\n```\\n\\n```javascript title=\\"src/Store/User/index.js\\"\\nconst sliceInitialState = {\\n  item: {},\\n}\\n\\nexport default buildSlice(\'user\', [FetchOne], sliceInitialState).reducer\\n```\\n\\nNext, you can use your state in your container like this:\\n\\n```javascript\\nimport React, { useEffect } from \'react\'\\nimport { useDispatch, useSelector } from \'react-redux\'\\nimport { View, ActivityIndicator, Text } from \'react-native\'\\nimport FetchOne from \'@/Store/User/FetchOne\'\\n\\nconst ExampleContainer = () => {\\n  const dispatch = useDispatch()\\n\\n  const user = useSelector(state => state.user.item)\\n  const fetchOneUserLoading = useSelector(state => state.user.fetchOne.loading)\\n  const fetchOneUserError = useSelector(state => state.user.fetchOne.error)\\n\\n  useEffect(() => {\\n    dispatch(FetchOne.action(id))\\n  }, [dispatch])\\n\\n  return (\\n    <View>\\n        {fetchOneUserLoading && <ActivityIndicator />}\\n        {fetchOneUserError ? (\\n          <Text style={Fonts.textRegular}>{fetchOneUserError.message}</Text>\\n        ) : (\\n          <Text style={Fonts.textRegular}>\\n            {t(\'example.helloUser\', { name: user.name })}\\n          </Text>\\n        )}\\n    </View>\\n  )\\n}\\n\\nexport default ExampleContainer\\n```\\n\\nThat\'s this simple! \ud83d\ude80\\n\\n## What\'s in the box? \ud83d\udce6\\n\\nStill hesitating ? Let\'s make a recap and see what this beautiful boilerplate can provide you:\\n- No headaches! \ud83e\udd12 Thanks to the **quick and easy install**, the\\n  **documentation** and of course the **included example**! (if you have all the installed\\n  [requirements](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)\\n  of course)\\n- **Typescript** \ud83d\udc99 / **Javascript** \ud83d\udc9b ? Your project, your choice!\\n- Never again sailing on troubled waters with **React Navigation**: THE powerful library to handle navigation \ud83d\udcf1\\n- **Redux** (with redux-toolkit and redux-toolkit-wrapper \ud83d\ude09) : handling\\n  redux store has never been as easy as this!! \u26a1\\n- DarkMode or colorful app? Give your users the power to choose!\\n  **Multi-theming** and **darkMode** support \ud83c\udf17\\n- French kisses aren\'t translatable, but you can translate your app! **i18n friendly** \ud83c\udf10\\n- You don\'t like bug hunt? Use **Flipper debugging** \ud83d\udc1b\\n- Maintained by **passionate developers** \u269b\ufe0f\\n\\nJust Test It \ud83e\uddea !!\\n\\n## Installation plugins \u2699\ufe0f\\n\\nFreshly in the v3.0.0 we created an installation plugin system. Of course, the first plugin added is the typescript one. \ud83d\ude09\\nWe are now able to add local or npm plugins to our boilerplate in order to apply them during the installation. \\nThis way, we get the app template with the features we asked for.\\nIn other words, no unwelcome pieces of code will lay in your app architecture anymore.\\n\\nYou got it, it\'s only the beginning thinking about the many plugins we could create for this project. \ud83e\udd29\\nSo wait and see what could be the next plugins...\ud83d\udd53\ud83e\udd10\\n\\n## Why this boilerplate? \ud83d\udc19\\n\\nBefore starting this project, we looked for already existing boilerplates.\\nWe\'ve found some, but while many were (and are always) awesome, we did not find what we were\\nlooking for: a **light, scalable, and flexible boilerplate with a great separation of concerns**.\\n\\nOne of the most popular was\\n[Matt Mcnamee\'s React Native Starter Kit](https://github.com/mcnamee/react-native-starter-kit),\\nwhich unfortunately missed Redux middleware and React Navigation.\\n\\nDigging deeper in the react-native boilerplates (ignoring unmaintained projects),\\nmany popular boilerplates were too opinionated: they\\nincluded 3rd party services or very strong architecture choices\\nthat we were not comfortable with.\\nTo name a few:\\n- [Snowflake](https://github.com/bartonhammond/snowflake) ran with a Hapi Server running on Redhat OpenShift,\\n- [Apollo\'s StarterKit](https://github.com/sysgears/apollo-universal-starter-kit) is based on GraphQL using Apollo,\\n- [Meteor Boilerplate](https://github.com/spencercarli/react-native-meteor-boilerplate) is based on Meteor.\\n\\nFinally, some did not contain the architecture we were looking for (the separation of concerns),\\nfor example [re-start](https://github.com/react-everywhere/re-start).\\n\\nOne interesting exception was\\n[Ignite IR Boilerplate \\"Andross\\"](https://github.com/infinitered/ignite-andross), but after\\nconsideration we decided not to use it because of the large amount of\\nunnecessary code/components it provided out of the box.\\n\\nIn 2021, some react-native boilerplates have changed. Let\'s see what are\\nthe differences:\\n\\n<table>\\n    <thead>\\n    <tr>\\n        <th align=\\"left\\">Boilerplate</th>\\n        <th align=\\"left\\">Difference from our</th>\\n    </tr>\\n    </thead>\\n    <tbody>\\n    <tr>\\n        <td align=\\"left\\">mcnamee/react-native-starter-kit</td>\\n        <td align=\\"left\\">\\n            <ul>\\n                <li>No React Navigation (react-native-router-flux instead),</li>\\n                <li>No Typescript support,</li>\\n                <li>Don\'t use the react-native-cli to init</li>\\n            </ul>\\n        </td>\\n    </tr>\\n    <tr>\\n        <td align=\\"left\\">bartonhammond/snowflake</td>\\n        <td align=\\"left\\">Seems not maintained anymore (last release was in 2017) \ud83d\udca4</td>\\n    </tr>\\n    <tr>\\n        <td align=\\"left\\">sysgears/apollo-universal-starter-kit</td>\\n        <td align=\\"left\\">\\n            <ul>\\n                <li>Is based on GraphQL using Apollo,</li>\\n                <li>Don\'t use the react-native-cli to init</li>\\n            </ul>\\n        </td>\\n    </tr>\\n    <tr>\\n        <td align=\\"left\\">spencercarli/react-native-meteor-boilerplate</td>\\n        <td align=\\"left\\">Seems not maintained (no release, last commit was in 2018) \ud83d\udca4</td>\\n    </tr>\\n    <tr>\\n        <td align=\\"left\\">react-everywhere/re-start</td>\\n        <td align=\\"left\\">Seems not maintained (last release was in 2017) \ud83d\udca4</td>\\n    </tr>\\n    <tr>\\n        <td align=\\"left\\">infinitered/ignite</td>\\n        <td align=\\"left\\">\\n            <ul>\\n                <li>Specific folders for ignite-cli and boilerplate items,</li>\\n                <li>MobX instead of Redux,</li>\\n                <li>Expo ready,</li>\\n                <li>Reactotron (ignite product) ready,</li>\\n                <li>Typescript only</li>\\n            </ul>\\n        </td>\\n    </tr>\\n    </tbody>\\n</table>\\n\\nSo there is no reason to hesitate : come \ud83e\uddf2, test \ud83e\uddea and leave a star \u2b50\\n\\nThanks for reading, See you for the next release. \ud83c\udff7\ufe0f"}]}')}}]);