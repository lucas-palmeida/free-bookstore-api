import userRepository from '../repositories/userRepository.js';

async function create(name, email, password) {
	const userExists = await userRepository.findByEmail(email);
	if(userExists) throw new Error("User alredy exists");
  const user = await userRepository.create(name, email, password);
  return user;
};

export { create };

