import userModel from '../models/usersModels.js'

//Crear un usuario
export const createUser = async (req, res) => {
  try {
    await userModel.create(req.body);
    res.status(200).json({
      message: "¡usuario creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message});
  }
};

//Actualizar un registro
export const updateUser = async(req,res)=>{
    try {
        await userModel.update(req.body,{
            where:{ id: req.params.id}
        })
        res.json({
            "message":"!Regristro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

//Eliminar un registro
export const deleteUser = async(req, res) =>{
    try {
        await userModel.destroy({
            where: { id: req.params.id }
        });
        res.json({
          message: "!Regristro eliminado correctamente!",
        });
    } catch {
        res.json({ message: error.message });
    }
}
