import { api } from "./api.js"

const dataEndPoints = {
    getAll: "data/characters?sortBy=_createdOn%20desc",
    singleCharacters: "data/characters",
}

async function getAllCharacters(){
    return api.get(dataEndPoints.getAll);
}

async function getSingleCharacters(id){
    return api.get(dataEndPoints.singleCharacters + '/' + id);
}

async function createCharacters(data){
    return api.post(dataEndPoints.singleCharacters, data);
}

async function updateCharacter(id, data){
    return api.put(dataEndPoints.singleCharacters + '/' + id, data);
}

async function deleteCharacter(id){
    return api.del(dataEndPoints.singleCharacters + '/' + id);
}

async function likeCharacter(characterId){
    return api.post("data/useful", {characterId})
}

async function totalLikesCount(characterId){
    return api.get(`data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`)
}

async function isLiked(characterId, userId){
    return api.get(`data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
export const dataService = {
    getAllCharacters,
    getSingleCharacters,
    createCharacters,
    updateCharacter,
    deleteCharacter,
    likeCharacter,
    totalLikesCount,
    isLiked
    
}