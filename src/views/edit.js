import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (item) => html`
        <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
              value=${item.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              value=${item.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          >${item.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          >${item.moreInfo}</textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;
let context = null;
export async function showEditView(ctx){
    const id = ctx.params.id;
    const data = await dataService.getSingleCharacters(id);
    console.log(data);
    ctx.render(editTemp(data));
    context = ctx;
}

async function submitHandler(e){
    e.preventDefault();

    const id = context.params.id;
    const formData = new FormData(e.target);
    const category = formData.get('category');
    const imageUrl = formData.get('image-url');
    const description = formData.get('description');
    const moreInfo = formData.get('additional-info');

    if(!category || !imageUrl || !description || !moreInfo){
        return window.alert('Error! All fields are required!');
    }

    try {
        await dataService.updateCharacter(id, {category, imageUrl, description, moreInfo});
        context.goTo(`/details/${id}`);
    } catch (error) {
        window.alert("Error!");
    }
}