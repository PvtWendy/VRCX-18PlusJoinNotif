import { reactive } from 'vue';

import dayjs from 'dayjs';

import * as utils from '../shared/utils';

const AppDebug = reactive({
    debug: true,
    debugWebSocket: true,
    debugUserDiff: true,
    debugPhotonLogging: true,
    debugGameLog: true,
    debugWebRequests: false,
    debugFriendState: false,
    debugIPC: false,
    debugVrcPlus: false,
    errorNoty: false,
    dontLogMeOut: false,
    endpointDomain: 'https://api.vrchat.cloud/api/1',
    endpointDomainVrchat: 'https://api.vrchat.cloud/api/1',
    websocketDomain: 'wss://pipeline.vrchat.cloud',
    websocketDomainVrchat: 'wss://pipeline.vrchat.cloud'
});

window.$debug = AppDebug;
window.utils = utils;
window.dayjs = dayjs;

export { AppDebug };
