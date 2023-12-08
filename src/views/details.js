import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner, isLoggedIn, isLiked, likedCount) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <div>
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">${item.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${likedCount}</span></h3>
              <div id="action-buttons">
              ${isOwner ? 
              html`
                 <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${delCharacter} href="" id="delete-btn">Delete</a>
              ` : isLoggedIn && !isLiked ? html`<a @click=${likeCharacter} href="" id="like-btn">Like</a>` : ""}
              </div>
            </div>
        </div>
    </section>
`;
let context = null;
export async function showDetailsView(ctx){
    const id = ctx.params.id;
    const data = await dataService.getSingleCharacters(id);
    const userData = userHelper.getUserData();

    let isLoggedIn = !!userData;
    let isOwner;
    let isLiked;

    if(isLoggedIn){
      isOwner = userHelper.getUserID() === data._ownerId;
      isLiked = await dataService.isLiked(id, userHelper.getUserID()); 
    }

    let likedCount = await dataService.totalLikesCount(id);
    ctx.render(detailsTemp(data, isOwner, isLoggedIn, isLiked, likedCount));
    context = ctx;
}

async function delCharacter(e){
  e.preventDefault();

  const confirmed = window.confirm("Are you sure you want to delete the character?");

  if(confirmed){
    const id = context.params.id;
    await dataService.deleteCharacter(id);
    context.goTo("/dashboard");
  }
}

async function likeCharacter(e){
  e.preventDefault();

  const id = context.params.id;
  await dataService.likeCharacter(id);
  let totalLikesCount = await dataService.totalLikesCount(id);
  document.getElementById('like-btn').innerText = totalLikesCount;
  context.goTo(`/details/${id}`);
}