import Child from '../models/childModel.js';

const childController = {
    addChild: async (req, res) => {
        try{
            const { firstName, lastName, age, gender, avatar} = req.body

            let username = req.body.firstName + req.body.lastName;
            username = username.toLowerCase();

            const newChild = new Child({
                firstName, lastName, username, age, gender, avatar, parents: req.user._id
            });

            await newChild.save();

            res.json({
                msg: 'New child added sucessful!',
                newChild
            });
        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    },
    getChildren: async (req, res) => {
        try {
            console.log(req.user._id)
            const children = await Child.find({
                parents: [req.user._id]
            })

            res.json({
                msg: 'Success!',
                result: children.length,
                children
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUserChildren: async (req, res) => {
        try {
            const features = new APIfeatures(Posts.find({parents: req.params.id}), req.query)
            .paginating()
            const children = await features.query.sort("-createdAt")

            res.json({
                children,
                result: children.length
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getChild: async (req, res) => {
        try {
            console.log(req.params)
            const child = await Child.findById(req.params.id)

            if(!child) return res.status(400).json({msg: 'This child user does not exist.'})

            res.json({
                child
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}


export default childController