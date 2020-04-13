// Adonis.js
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

// Models
import Post from "App/Models/Post";

// Validators
import CreateValidator from "App/Validators/Posts/CreateValidator";
import UpdateValidator from "App/Validators/Posts/UpdateValidator";

export default class PostsController {
  public async index({ request, response }: HttpContextContract) {
    const { sortBy = "title", sortOrder = "asc" } = request.get();

    const results = await Post.query().orderBy(sortBy, sortOrder).select("*");

    return response.status(200).json(results);
  }

  public async store({ request, response }: HttpContextContract) {
    const { title, body } = await request.validate(CreateValidator);

    const post = await Post.create({ title, body });

    return response.status(201).json({ status: true, post });
  }

  public async show({ response, params }: HttpContextContract) {
    const post = Post.find(params.id);

    return response.status(201).json({ status: true, post });
  }

  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator);

    var { title, body } = await Post.findOrFail(params.id);

    ({ title = title, body = body } = data);

    await Post.query().where({ id: params.id }).update({ title, body });

    return response.status(200).json({ status: true, message: "post updated" });
  }

  public async delete({ response, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id);
    await post.delete();

    return response.status(200).json({ status: true, mesaage: "post deleted" });
  }
}
