import { asyncRouterMap, constantRouterMap } from "../../router";

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
      return roles.some(role => route.meta.roles.indexOf(role) >= 0);
    } else {
      return true;
    }
  }

/**
 * @param asyncRouterMap
 * @param roles
 */

function filterAsyncRouter(asyncRouterMap, roles) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if(hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles);
            }
            return true
        }
        return false
    });
    return accessedRouters
}

const permission = {
    state: {
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers;
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { roles } = data;
                let accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission