import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY_PREFIX = "@AmpStorage"

let dataMemory: any = {}

export default class AmplifyStorage {
    
    static syncPromise: Promise<unknown>

    static setItem(key: string, value: string) {
        console.log('set', key)
        AsyncStorage.setItem(STORAGE_KEY_PREFIX + key, value)
        dataMemory[key] = value
        return dataMemory[key]
    }

    static getItem(key: string) {
        return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
    }

    static removeItem(key: string) {
        AsyncStorage.removeItem(STORAGE_KEY_PREFIX + key);
        return delete dataMemory[key]
    }

    static clear() {
        dataMemory = {}
        return dataMemory
    }

    static sync() {
        if (!AmplifyStorage.syncPromise) {
            AmplifyStorage.syncPromise = new Promise((res, rej) => {
                AsyncStorage.getAllKeys((errKeys, keys) => {
                    if (errKeys) rej(errKeys)
                    const memoryKeys = keys!.filter((key) => key.startsWith(STORAGE_KEY_PREFIX));
                    AsyncStorage.multiGet(memoryKeys, (err, stores) => {
                        if (err) rej(err)
                        stores?.map((result, index, store) => {
                            const key = store[index][0];
                            const value = store[index][1];
                            const memoryKey = key.replace(STORAGE_KEY_PREFIX, '')
                            dataMemory[memoryKey] = value
                        });
                        res()
                    })
                })
            })
            return AmplifyStorage.syncPromise;
        }
    }
}