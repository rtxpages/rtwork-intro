
const OpenID = () => {
    const kc = new Keycloak("https://rtcenter.org/config/keycloak-public-view.json");

    return {
        init: (onLoad, authenticatedCallback, unauthenticatedCallback, loginParams='')=>{
            kc.init({
                onLoad:onLoad,
                checkLoginIframe:false,
                silentCheckSsoRedirectUri: window.location.origin + '/pages/project-pages/audi-qrcode/silent-sso.html'
            }).then(function(authenticated) {
                if(authenticated){
                    kc.loadUserInfo().then(function(profile) {
                        authenticatedCallback(profile);
                    })
                }else{
                    // Prepare KC's login url
                    // let redirectUri = window.location.href
                    // let loginURL = kc.createLoginUrl({ redirectUri: redirectUri }) + loginParams;

                    // // Redirect
                    // window.location.href = loginURL;

                    unauthenticatedCallback()
                }
                
            }).catch(function() {
                console.log('failed to initialize');
            });
        },
        getClient: ()=>{
            return kc
        }

    }
    
}
