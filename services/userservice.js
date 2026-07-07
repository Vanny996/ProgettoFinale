
export const add = async (content)=> {
    const {password,salt}= cryptoUtils.hashPassword(content.password);
    content.password= password;
    content.salt = salt;
    content.registrationToken = cryptoUtils.generateRandomCode(16);
    const user= await userRepo.add(content)
    await mailService.sendRegistrationMail(user);
    return user;
};
